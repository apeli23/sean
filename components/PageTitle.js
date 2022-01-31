export default function PageTitle({ children }) {
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-cyan-500 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
