function Logo({ full }: { full?: boolean }) {
  return (
    <a
      href="/"
      className="text-2xl font-medium text-brand-900 md:text-3xl xl:text-4xl"
    >
      Ahmad{full ? " Rehan" : "."}
    </a>
  );
}

export default Logo;
