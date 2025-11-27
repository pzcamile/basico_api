export default async function university() {

    const response = await fetch("https://69165f6da7a34288a27d2bf4.mockapi.io/university")

    const listUniversity = await response.json();

    console.log(listUniversity)

    const rows = [];
    for (const university of listUniversity) {
        rows.push(<tr key={university.id}>
            <td>{university.id}</td>
            <td>{university.abbreviation}</td>
            <td>{university.name}</td>
            <td><a href={`/university/delete/?id=${university.id}`}>Excluir</a></td>
            <td><a href={`/university/update/?id=${university.id}`}>Atualizar</a></td>
        </tr>
        )
    }

    return (
        <div>
            <br></br>
            <h1>Lista de Universidades</h1>

            <table border={3}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Abraviação</th>
                        <th>Nome</th>
                    </tr>

                </thead>

                <tbody>
                    {rows}
                </tbody>

            </table>

        </div>

    )
}