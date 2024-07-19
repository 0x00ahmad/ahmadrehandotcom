function Logo({ full }: { full?: boolean }) {
  return (
    <a
      href="/"
      className="text-xl font-medium text-brand-900 text-primary dark:text-brand-100 md:text-2xl xl:text-3xl"
    >
      Ahmad{full ? " Rehan" : "."}
    </a>
  );
}

export default Logo;
