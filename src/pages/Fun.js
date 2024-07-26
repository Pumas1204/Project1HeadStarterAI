import React, { useState, useEffect, useRef } from 'react';
import '../fun.css'; // Assuming you want to use a separate CSS file for styling

const canvasSize = 500;
const scale = 20;
const rows = canvasSize / scale;
const columns = canvasSize / scale;

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * columns) * scale,
  y: Math.floor(Math.random() * rows) * scale,
});

const Fun = () => {
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [food, setFood] = useState(getRandomPosition());
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const canvasRef = useRef(null);

  const resetGame = () => {
    setSnake([{ x: 0, y: 0 }]);
    setFood(getRandomPosition());
    setDirection('RIGHT');
    setGameOver(false);
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newHead = { ...prevSnake[0] };
        switch (direction) {
          case 'UP':
            newHead.y -= scale;
            break;
          case 'DOWN':
            newHead.y += scale;
            break;
          case 'LEFT':
            newHead.x -= scale;
            break;
          case 'RIGHT':
            newHead.x += scale;
            break;
          default:
            break;
        }

        const newSnake = [newHead, ...prevSnake.slice(0, -1)];

        if (
          newHead.x < 0 ||
          newHead.x >= canvasSize ||
          newHead.y < 0 ||
          newHead.y >= canvasSize ||
          newSnake.some((segment, index) =>
            index !== 0
              ? segment.x === newHead.x && segment.y === newHead.y
              : false
          )
        ) {
          setGameOver(true);
          return prevSnake;
        }

        if (newHead.x === food.x && newHead.y === food.y) {
          const newFood = getRandomPosition();
          setFood(newFood);
          return [newHead, ...prevSnake];
        }

        return newSnake;
      });
    };

    const draw = () => {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasSize, canvasSize);
      ctx.fillStyle = 'green';
      snake.forEach((segment) => {
        ctx.fillRect(segment.x, segment.y, scale, scale);
      });
      ctx.fillStyle = 'red';
      ctx.fillRect(food.x, food.y, scale, scale);
    };

    const gameLoop = () => {
      moveSnake();
      draw();
    };

    const interval = setInterval(gameLoop, 100);

    return () => clearInterval(interval);
  }, [direction, snake, food, gameOver]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        className="gameCanvas"
      />
      {gameOver && (
        <div className="gameOverContainer">
          <h2 className="gameOver">Game Over</h2>
          <button className="tryAgainButton" onClick={resetGame}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Fun;