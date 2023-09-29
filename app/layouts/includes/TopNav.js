/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function TopNav() {
  const menuGamesRight = [
    {
      id: 0,
      name: 'LEAGUE OF LEGENDS',
    },
    {
      id: 1,
      name: 'FORTNITE',
    },
    {
      id: 2,
      name: 'APEX LEGENDS',
    },
  ];

  const menuGamesLeft = [
    {
      id: 3,
      name: 'DESTINY',
    },
    {
      id: 4,
      name: 'CALL OF DUTY',
    },
    {
      id: 5,
      name: 'VALORANT',
    },
  ];

  return (
    <>
      <div className="bg-black flex-row justify-between fixed z-30 flex items-center w-full border-b h-[60px]">
        {menuGamesRight.map((game, index) => {
          return (
            <Link
              className="text-white flex items-center h-full hover:bg-[#8D1CFF] w-[186px] justify-center px-2"
              href="/"
              key={game.id}
            >
              {game.name}
            </Link>
          );
        })}
        <Link href="/">
          <img className="w-[150px] h-[60px]" src="/images/studio.png" />
        </Link>
        {menuGamesLeft.map((game, index) => {
          return (
            <Link
              className="text-white flex items-center h-full hover:bg-[#8D1CFF] w-[186px] justify-center px-2"
              href="/"
              key={game.id}
            >
              {game.name}
            </Link>
          );
        })}

        <div className="bg-white rounded-full w-12 h-12"></div>
      </div>
    </>
  );
}
