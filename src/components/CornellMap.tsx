import React, { useState, useEffect, useCallback } from 'react';
import { Character } from './Character';
import { Building } from './Building';
import { Tree } from './Tree';
import { Path } from './Path';
import { useKeyboard } from '../hooks/useKeyboard';
import { checkCollision, isWithinBounds } from '../utils/collision';
import { CORNELL_BUILDINGS, TREES, PATHS, MAP_BOUNDS } from '../data/cornellMap';
import { Character as CharacterType, Position } from '../types';

const MOVE_SPEED = 5;
const CHARACTER_SIZE = 24;

// Camera viewport dimensions (like the screen)
// const VIEWPORT_WIDTH = 640;
// const VIEWPORT_HEIGHT = 480;
// const VIEWPORT_WIDTH = MAP_BOUNDS.width - 300;
// const VIEWPORT_HEIGHT = MAP_BOUNDS.height - 200;
const VIEWPORT_WIDTH = MAP_BOUNDS.width;
const VIEWPORT_HEIGHT = MAP_BOUNDS.height;

export const CornellMap: React.FC = () => {
  const [character, setCharacter] = useState<CharacterType>({
    position: { x: 100, y: 100 },
    direction: 'right',
    isMoving: false
  });

  const keys = useKeyboard();

  const moveCharacter = useCallback(() => {
    const newPosition: Position = { ...character.position };
    let newDirection = character.direction;
    let isMoving = false;

    // Check movement keys
    if (keys['w'] || keys['arrowup']) {
      newPosition.y -= MOVE_SPEED;
      newDirection = 'up';
      isMoving = true;
    }
    if (keys['s'] || keys['arrowdown']) {
      newPosition.y += MOVE_SPEED;
      newDirection = 'down';
      isMoving = true;
    }
    if (keys['a'] || keys['arrowleft']) {
      newPosition.x -= MOVE_SPEED;
      newDirection = 'left';
      isMoving = true;
    }
    if (keys['d'] || keys['arrowright']) {
      newPosition.x += MOVE_SPEED;
      newDirection = 'right';
      isMoving = true;
    }

    // Check bounds and collisions
    if (
      isMoving &&
      isWithinBounds(newPosition, CHARACTER_SIZE, MAP_BOUNDS) &&
      !checkCollision(newPosition, CHARACTER_SIZE, CORNELL_BUILDINGS)
    ) {
      setCharacter({
        position: newPosition,
        direction: newDirection,
        isMoving
      });
    } else if (character.isMoving !== isMoving) {
      setCharacter(prev => ({ ...prev, isMoving }));
    }
  }, [keys, character]);

  useEffect(() => {
    const gameLoop = setInterval(moveCharacter, 16); // ~60 FPS
    return () => clearInterval(gameLoop);
  }, [moveCharacter]);

  // Camera position: center the view on the character, clamped to map edges
  const rawCamX = character.position.x - VIEWPORT_WIDTH / 2;
  const rawCamY = character.position.y - VIEWPORT_HEIGHT / 2;

  const maxCamX = Math.max(0, MAP_BOUNDS.width - VIEWPORT_WIDTH);
  const maxCamY = Math.max(0, MAP_BOUNDS.height - VIEWPORT_HEIGHT);

  const cameraX = Math.min(Math.max(rawCamX, 0), maxCamX);
  const cameraY = Math.min(Math.max(rawCamY, 0), maxCamY);

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative flex items-center justify-center">
      {/* Fixed-size viewport */}
      <div
        className="relative border-4 border-gray-600 shadow-2xl"
        style={{
          width: VIEWPORT_WIDTH,
          height: VIEWPORT_HEIGHT,
          overflow: 'hidden',
          position: 'relative',
          background: 'black',
        }}
      >
        {/* World layer that moves opposite the camera */}
        <div
          className="absolute"
          style={{
            width: MAP_BOUNDS.width,
            height: MAP_BOUNDS.height,
            transform: `translate3d(${-cameraX}px, ${-cameraY}px, 0)`,
            transition: 'transform 0.05s linear',
            willChange: 'transform',
            background: `repeating-conic-gradient(
              from 0deg at 50% 50%,
              #90EE90 0deg 90deg,
              #98FB98 90deg 180deg,
              #90EE90 180deg 270deg,
              #98FB98 270deg 360deg
            )`,
            backgroundSize: '32px 32px',
            imageRendering: 'pixelated',
          }}
        >
          {/* Paths */}
          {PATHS.map((path, index) => (
            <Path
              key={index}
              x={path.x}
              y={path.y}
              width={path.width}
              height={path.height}
            />
          ))}

          {/* Trees */}
          {TREES.map((tree, index) => (
            <Tree key={index} x={tree.x} y={tree.y} />
          ))}

          {/* Buildings */}
          {CORNELL_BUILDINGS.map(building => (
            <Building key={building.id} building={building} />
          ))}

          {/* Character (rendered within moving world) */}
          <Character character={character} />
        </div>

        {/* Cornell University Title (HUD, stays fixed on screen) */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
          <div
            className="bg-black text-white px-4 py-2 border-2 border-white"
            style={{
              fontFamily: 'monospace',
              fontSize: '16px',
              imageRendering: 'pixelated',
              fontWeight: 'bold'
            }}
          >
            CORNELL UNIVERSITY
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 border-2 border-white">
        <p
          className="text-center"
          style={{
            fontFamily: 'monospace',
            fontSize: '12px',
            imageRendering: 'pixelated'
          }}
        >
          Use WASD or Arrow Keys to move around campus
        </p>
      </div>

      {/* Mini-map placeholder (top right) */}
      {/* <div
        className="absolute top-4 right-4 bg-gray-800 border-2 border-white"
        style={{ width: '120px', height: '80px' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 opacity-50"></div>
        <div
          className="absolute top-1 left-1 text-white text-xs"
          style={{ fontFamily: 'monospace' }}
        >
          MAP
        </div>
      </div> */}
    </div>
  );
};
