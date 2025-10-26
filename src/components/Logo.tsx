import { useKindeAuth } from "@kinde-oss/kinde-auth-react";


function Logo() {
  const {user} = useKindeAuth();
  let name = `${user?.givenName } ${user?.familyName}`

  return (
    //<img src="https://bytegrad.com/course-assets/react-nextjs/dots.png" className="h-3"/>
    <p>Hello, <span className="font-bold">{name}</span></p>
  )
}

export default Logo