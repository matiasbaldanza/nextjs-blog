import Image from "next/image"

export default function Me() {
  return (
    <>
        <h1>Hi! I'm Matias 👋</h1>
    <Image
        priority
        src="/images/profile.jpg"
        height={240}
        width={240} 
        alt="Matias"
        title={name}
    />
    </>
  )
}