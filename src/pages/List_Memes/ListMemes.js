import { Text } from "react-native";

import { useEffect, useState } from "react";


export const API =
  "http://5846-2804-15e4-8060-600-ef52-1060-f01b-8854.ngrok.io";

export default function ListMemes() {

    const [list, setList] = useState ('')

  fetch(API + "/memes")
    .then(async (response) => {
        const data = await response.json ()
        setList(data)
    })
    .catch((error) => {
        alert ('Houve um erro ao tentar listar os memes')
        console.log (error)
    });

  return (
    <Text>ola</Text>
  )
  
  
}
