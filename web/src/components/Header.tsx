function Header({ hasCharacters }: { hasCharacters: boolean }) {
  return hasCharacters ? (
    <header className="relative mx-auto text-center">
      <h1 className="text-6xl font-semibold tracking-tight text-white">
        Welcome to <span className="text-mp">MainPower</span>!
      </h1>
      <h2 className="text-lg text-white/60 font-medium">
        Select a character to begin your journey.
      </h2>
    </header>
  ) : (
    <header className="relative mx-auto text-center">
      <h1 className="text-6xl font-semibold tracking-tight text-white">
        Welcome to <span className="text-mp">MainPower</span>!
      </h1>
      <h2 className="text-lg text-white/60 font-medium">
        Let's get started by creating your first character.
      </h2>
    </header>
  );
}

export default Header;
