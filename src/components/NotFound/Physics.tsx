"use client";

import React, { useEffect, useState, useRef } from "react";
import Matter from "matter-js";

const opts = {
  isStatic: true,
  friction: 2,
};

function makeBodies(
  container: HTMLElement,
  world: Matter.World,
  elements: HTMLCollection,
  frictionOpts: { friction: number; frictionAir: number },
  densityOpts: { enable: boolean; density: number }
) {
  const containerBounding = container.getBoundingClientRect();
  const stack = Matter.Composites.stack(
    0,
    0,
    elements.length,
    1,
    0,
    0,
    (xx: number, yy: number, i: number) => {
      // Explicit type for i
      const el = elements[i] as HTMLElement;
      const { width, height } = el.getBoundingClientRect();

      const maxLeft = containerBounding.width - width;
      const maxTop = containerBounding.height - height;

      const tLeft = Math.floor(Math.random() * maxLeft);
      const tTop = Math.floor(Math.random() * maxTop);

      return Matter.Bodies.rectangle(tLeft, tTop, width, height, {
        isStatic: false,
        density: densityOpts.enable ? densityOpts.density : 0.001,
        friction: frictionOpts.friction,
        frictionAir: frictionOpts.frictionAir,
      });
    }
  );

  Matter.World.add(world, stack);

  return stack;
}

function makeWalls(
  containerBounding: DOMRect,
  engine: Matter.Engine,
  wallOptions: { top: boolean; bottom: boolean; right: boolean; left: boolean }
) {
  const Bodies = Matter.Bodies;

  if (wallOptions.bottom) {
    const bottom = Bodies.rectangle(
      containerBounding.width / 2,
      containerBounding.height + 50,
      containerBounding.width + 100,
      100,
      opts
    );
    Matter.World.add(engine.world, bottom);
  }
  if (wallOptions.top) {
    const top = Bodies.rectangle(
      containerBounding.width / 2,
      -50,
      containerBounding.width + 100,
      100,
      opts
    );
    Matter.World.add(engine.world, top);
  }
  if (wallOptions.right) {
    const wRight = Bodies.rectangle(
      containerBounding.width + 50,
      containerBounding.height / 2,
      100,
      containerBounding.height,
      opts
    );
    Matter.World.add(engine.world, wRight);
  }
  if (wallOptions.left) {
    const wLeft = Bodies.rectangle(
      -50,
      containerBounding.height / 2,
      100,
      containerBounding.height,
      opts
    );
    Matter.World.add(engine.world, wLeft);
  }
}

interface PhysicsProps {
  children: React.ReactNode;
  gravX?: number;
  gravY?: number;
  wallOptions?: {
    top: boolean;
    bottom: boolean;
    right: boolean;
    left: boolean;
  };
  frictionOptions?: { friction: number; frictionAir: number };
  mouseOptions?: {
    enable: boolean;
    angularStiffness: number;
    stiffness: number;
  };
  densityOptions?: { enable: boolean; density: number };
}

export default function Physics({
  children,
  gravX = 0,
  gravY = 1,
  wallOptions = { top: true, bottom: true, right: true, left: true },
  frictionOptions = { friction: 0.1, frictionAir: 0.01 },
  mouseOptions = { enable: true, angularStiffness: 0, stiffness: 0.2 },
  densityOptions = { enable: true, density: 0.001 },
}: PhysicsProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView || !containerRef.current) return;

    const engine = Matter.Engine.create({
      gravity: { y: gravY, x: gravX },
    });

    const containerBounding = containerRef.current.getBoundingClientRect();

    makeWalls(containerBounding, engine, wallOptions);

    let mouseConstraint: Matter.MouseConstraint | null = null;
    if (mouseOptions.enable && containerRef.current) {
      const mouse = Matter.Mouse.create(containerRef.current);
      mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          //   angularStiffness: mouseOptions.angularStiffness,
          stiffness: mouseOptions.stiffness,
        },
      });
      Matter.Composite.add(engine.world, mouseConstraint);
    }

    const stack = makeBodies(
      containerRef.current,
      engine.world,
      containerRef.current.children,
      frictionOptions,
      densityOptions
    );

    function update() {
      if (!containerRef.current) return;
      stack.bodies.forEach((block, i) => {
        const el = containerRef.current?.children[i] as HTMLElement;
        const { x, y } = block.position;

        if (el) {
          el.style.visibility = "visible";
          el.style.transform = `translate(${x - el.offsetWidth / 2}px, ${
            y - el.offsetHeight / 2
          }px) rotate(${block.angle}rad)`;
        }
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(update);
    }

    const animationId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationId);
      Matter.Engine.clear(engine);
    };
  }, [
    isInView,
    gravX,
    gravY,
    wallOptions,
    frictionOptions,
    mouseOptions,
    densityOptions,
  ]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {React.Children.map(children, (child) => (
        <div
          style={{
            position: "absolute",
            visibility: "hidden",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
