"use client"

import { useSearchParams } from "next/navigation";

export default function NewUniversity(){

    const id= useSearchParams().get('id');

    async function saveUniversity(){

        console.log("Acessou")
        const name = document.getElementById("name") as HTMLInputElement;
        const abbreviation = document.getElementById("abbreviation") as HTMLInputElement;

        const university = {
            name: name.value,
            abbreviation: abbreviation.value
        }

        await fetch(`https://69165f6da7a34288a27d2bf4.mockapi.io/university/${id}`,
            {
                method:"PUT",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(university)

            }
        )

    }
    return(
        <div>
            <br />
            <h1>Atualizar Universidade</h1>
            <br />

            <input type="text" id="name" placeholder="Digite o nome da Universidade" />
            <br />
            <input type="text" id="abbreviation" placeholder="Digite a Abreviação"/>
            <br />

            <button onClick={saveUniversity}>Atualizar</button>
        </div>
    )
}