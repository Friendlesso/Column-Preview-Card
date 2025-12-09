
type CardProps = {
  title: string,
  description: string,
  icon: string,
  color: string,
  textColor: string,
  hovered: string | null;
  
}

export function Card({ title, description, icon, color, textColor }: CardProps) {


  return (
    <article className={`card h-[33vh] sm:h-[60vh] sm:max-w-[30vw] sm:w-84 ${color} flex flex-col px-10 py-10 text-left`}>
      <div>
        <img src={icon} alt="Card Icon" />
      </div>
      <div>
        <h3 className="text-3xl text-gray-100">{title.toUpperCase()}</h3>
        <p className="text-[#ffffffbf]">{description}</p>
      </div>
      <a href="#" className={` ${textColor} border border-gray-100 w-fit px-8 py-2 rounded-3xl bg-white mt-auto`}>Learn more</a>
    </article>
  )
}