export default async function university() {

    const response = await fetch("https://69165f6da7a34288a27d2bf4.mockapi.io/student")

    const listStudent = await response.json();

    console.log(listStudent)

    const rows = [];
    for (const student of listStudent) {
        rows.push(<tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
        </tr>
        )
    }

    return (
        <div>
            <br></br>
            <h1>Lista de Estudantes</h1>

            <table border={3}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>

                </thead>

                <tbody>
                    {rows}
                </tbody>

            </table>

        </div>

    )
}