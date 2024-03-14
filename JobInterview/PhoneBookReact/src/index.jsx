import React, { useState } from "react"
import { createRoot } from "react-dom/client"

const style = {
    table: {
        borderCollapse: "collapse",
    },
    tableCell: {
        border: "1px solid gray",
        margin: 0,
        padding: "5px 10px",
        width: "max-content",
        minWidth: "150px",
    },
    form: {
        container: {
            padding: "20px",
            border: "1px solid #F0F8FF",
            borderRadius: "15px",
            width: "max-content",
            marginBottom: "40px",
        },
        inputs: {
            marginBottom: "5px",
        },
        submitBtn: {
            marginTop: "10px",
            padding: "10px 15px",
            border: "none",
            backgroundColor: "lightseagreen",
            fontSize: "14px",
            borderRadius: "5px",
        },
    },
}

function PhoneBookForm({ formData, onChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className="userFirstname"
                name="userFirstname"
                type="text"
                value={formData.userFirstname}
                onChange={onChange}
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className="userLastname"
                name="userLastname"
                type="text"
                value={formData.userLastname}
                onChange={onChange}
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className="userPhone"
                name="userPhone"
                type="text"
                value={formData.userPhone}
                onChange={onChange}
            />
            <br />
            <input
                style={style.form.submitBtn}
                className="submitButton"
                type="submit"
                value="Add User"
            />
        </form>
    )
}

function InformationTable({ tableData }) {
    return (
        <table style={style.table} className="informationTable">
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.userFirstname}</td>
                        <td>{data.userLastname}</td>
                        <td>{data.userPhone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

function Application(props) {
    const [formData, setFormData] = useState({
        userFirstname: "Coder",
        userLastname: "Byte",
        userPhone: "8885559999",
    })

    const [tableData, setTableData] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

        // Sort the table by the last name
        const sortedTableData = [...tableData, formData]
        sortedTableData.sort((a, b) =>
            a.userLastname.localeCompare(b.userLastname)
        )

        setTableData(sortedTableData)
        setFormData({ userFirstname: "", userLastname: "", userPhone: "" })
    }

    return (
        <section>
            <PhoneBookForm
                formData={formData}
                onChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <InformationTable tableData={tableData} />
        </section>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<Application />)
