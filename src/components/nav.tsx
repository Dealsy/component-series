import Link from "next/link";

const routes = {
  HOME: "/",
  STAR_RATING: "/star-rating",
  CAROUSEL: "/carousel",
  INFINITE_SCROLL: "/infinite-scroll",
  TIC_TAC_TOE: "/tic-tac-toe",
  TODO: "/todo",
} as const;

export default function Nav() {
  return (
    <nav className="flex p-4 h-16 bg-gray-800 text-white">
      <ul className="flex gap-4">
        <li>
          <Link href={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link href={routes.STAR_RATING}>Star Rating</Link>
        </li>
        <li>
          <Link href={routes.CAROUSEL}>Carousel</Link>
        </li>
        <li>
          <Link href={routes.INFINITE_SCROLL}>Infinite Scroll</Link>
        </li>
        <li>
          <Link href={routes.TIC_TAC_TOE}>Tic Tac Toe</Link>
        </li>
        <li>
          <Link href={routes.TODO}>Todo</Link>
        </li>
      </ul>
    </nav>
  );
}
