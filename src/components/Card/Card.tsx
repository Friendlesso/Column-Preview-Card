
type CardProps = {
  title: string,
  description: string,
  icon: string,
  color: string,
  textColor: string,
  hovered: string | null;
  setHovered: React.Dispatch<React.SetStateAction<string | null>>

}

export function Card({ title, description, icon, color, textColor, hovered, setHovered }: CardProps) {

  const isHovered = hovered === title;

  return (
    <article className={`card h-[33vh] sm:h-[60vh] sm:max-w-[30vw] sm:w-84 ${color} flex flex-col px-10 py-10 text-left`}>
      <div>
        <img src={icon} alt="Card Icon" />
      </div>
      <div>
        <h3 className="text-3xl text-gray-100">{title.toUpperCase()}</h3>
        <p className="text-[#ffffffbf]">{description}</p>
      </div>
      <a
        href="#"
        className={` ${isHovered ? 'border border-gray-100 text-white ' :  `bg-white ${textColor}`} box-border w-fit px-8 py-2 rounded-3xl  mt-auto transition-colors duration-150`}
        onMouseEnter={() => {
          setHovered(title);
        }}
        onMouseLeave={() => {
          setHovered(null)
        }}
      >
        Learn more
      </a>
    </article>
  )
}