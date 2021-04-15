import React from 'react';
import './Game.scss';
import clsx from 'clsx';
import { StatusGame } from './StatusGame';
import { useGameState } from './useGameState';

export default function Game() {
  const {
    onClickOrPress,
    statusGame,
    counter,
    dinoRef,
    dinoClasses,
    cactusRef,
    t,
  } = useGameState();

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
