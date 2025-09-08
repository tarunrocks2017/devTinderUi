import React, { useState} from 'react';

const Signup = () => {
   const [formData, setFormData] = useState( {
    first_name:"",
    last_name:"",
    email:"",
    gender:"",
    password:"",
    skills:[]
   })
    const formFieldsConfig = [
        {
            type: "text",
            label: "First Name",
            name: "first_name",
        },
        {
            type: "email",
            label: "Email",
            name: "email",
        },
        {
            type: "password",
            label: "Password",
            name: "password",
        },
        {
            type: "radio",
            label: "Gender",
            name: "gender",
            options: [
                'Male',
                'Female'
            ]
        },
        {
            type: "checkbox",
            label: "Skills",
            name: "skills",
            options: [
                'Tech',
                'Sports',
                'Study'
            ]
        }
    ];

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prev) => {
            return {...prev, name:value}
        } )
    };
    return (
        <section style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}>
            <form>
            {
                formFieldsConfig.map( item => {
                    return <div>
                        <label>{item.label}</label>
                        {item.type == 'radio' || item.type == 'checkbox' ? item.options.map(it => {
                           return <lable>{it}
                            <input type={item.type} name={item.name} value={formData[item.name]} onChange={(e) => handleChange(e)} />
                            </lable>
                }) : <input type={item.type} name={item.name} />}
                    </div>
                })
            }
            </form>

        </section>
    )
}

export default Signup