export const Section = ({
  title,
  className,
  classNameContainer,
  classNameTitle,
  children,
}) => {
  return (
    <section className={`section${className ? ` ${className}` : ''}`}>
      <div
        className={`section__container${
          classNameContainer ? ` ${classNameContainer}` : ''
        }`}
      >
        <h2
          className={`section__title${
            classNameTitle ? ` ${classNameTitle}` : ''
          }`}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};
