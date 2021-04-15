import React, { useEffect, useRef, useState } from 'react';
import './Game.scss';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

enum StatusGame {
  NoGame,
  Game,
  GameOver,
}

export default function Game() {
  const dinoRef = useRef<HTMLDivElement | null>(null);
  const cactusRef = useRef<HTMLDivElement | null>(null);
  const [dinoClasses, setDinoClasses] = useState<string[]>([]);
  const [statusGame, setStatusGame] = useState(StatusGame.NoGame);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (dinoClasses.find((x) => x === 'game__jump')) {
      timeout = setTimeout(() => {
        setDinoClasses((x) => x.filter((v) => v !== 'game__jump'));
        setCounter((c) => c + 1);
      }, 300);
    }
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [dinoClasses]);

  useEffect(() => {
    if (dinoRef.current === null) return () => {};
    const interval = setInterval(() => {
      const dinoStyle = window.getComputedStyle(dinoRef.current!);
      const cactusStyle = window.getComputedStyle(cactusRef.current!);
      const dinoTop = parseInt(dinoStyle.getPropertyValue('top'), 10);
      const cactusLeft = parseInt(cactusStyle.getPropertyValue('left'), 10);
      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        setStatusGame(StatusGame.GameOver);
      }
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const onClickOrPress = () => {
    if (statusGame === StatusGame.GameOver) setCounter(0);
    setStatusGame(StatusGame.Game);
    setDinoClasses((v) => {
      return [...v, 'game__jump'];
    });
  };

  const [t] = useTranslation();

  return (
    <section
      className="game"
      onKeyDown={onClickOrPress}
      onMouseDown={onClickOrPress}
      role="button"
      tabIndex={0}
    >
      <div
        className="game__counter"
        data-show={statusGame !== StatusGame.NoGame}
      >
        {counter}
      </div>
      <div
        className="game__game-over"
        data-show={statusGame === StatusGame.GameOver}
      >
        {t('game over')}!
      </div>
      <div ref={dinoRef} className={clsx('game__dino', dinoClasses)} />
      <div
        ref={cactusRef}
        className="game__cactus"
        data-started={statusGame === StatusGame.Game}
      />
    </section>
  );
}
