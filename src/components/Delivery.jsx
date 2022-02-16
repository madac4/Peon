import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form id='order-info' onSubmit={handleSubmit(onSubmit)}>
            <legend className='big'>Informatia de contact</legend>
            <p>
                <input style={errors.name && errors.name.type === "required" && { borderColor: '#E74C3C', backgroundColor: '#f0897d50' }} type="text" placeholder="Numele" {...register("name", { required: true, min: 2, maxLength: 30 })} />
                {errors.name && errors.name.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
            </p>
            <p>
                <input style={errors.lastName && errors.lastName.type === "required" && { borderColor: '#E74C3C', backgroundColor: '#f0897d50' }} type="text" placeholder="Prenumele" {...register("lastName", { required: true, min: 2, maxLength: 30 })} />
                {errors.lastName && errors.lastName.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
            </p>
            <p>
                <input style={errors.email && errors.email.type === "required" && { borderColor: '#E74C3C', backgroundColor: '#f0897d50' }} type="email" placeholder="E-mail" {...register("email", { required: true, min: 3 })} />
                {errors.email && errors.email.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
            </p>
            <p>
                <input style={errors.tel && errors.tel.type === "required" && { borderColor: '#E74C3C', backgroundColor: '#f0897d50' }} type="tel" placeholder="Telefon" {...register("tel", { required: true, min: 9 })} />
                {errors.tel && errors.tel.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
            </p>
            <legend className='big'>Adresa</legend>
            <p className='col-2'>
                <input style={errors.address && errors.address.type === "required" && { borderColor: '#E74C3C', backgroundColor: '#f0897d50' }} type="text" placeholder="Strada, casa, apartamentul, s.a" {...register("address", { required: true, min: 2, maxLength: 30 })} />
                {errors.address && errors.address.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
            </p>
            <p>
                <input style={errors.region && errors.region.type === "required" && { borderColor: '#E74C3C', backgroundColor: '#f0897d50' }} type="text" placeholder="Regiunea" {...register("region", { required: true, min: 3 })} />
                {errors.region && errors.region.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
            </p>
            <p>
                <input style={errors.city && errors.city.type === "required" && { borderColor: '#E74C3C', backgroundColor: '#f0897d50' }} type="text" placeholder="Orasul" {...register("city", { required: true, min: 3 })} />
                {errors.city && errors.city.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
            </p>
            <p>
                <input style={errors.postalIndex && errors.postalIndex.type === "required" && { borderColor: '#E74C3C', backgroundColor: '#f0897d50' }} type="text" placeholder="Indexul postal" {...register("postalIndex", { required: true, min: 4 })} />
                {errors.postalIndex && errors.postalIndex.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
            </p>
            <p>
                <select defaultValue={'Moldova'} {...register("country", { required: true })}>
                    <option value="Moldova">Moldova</option>
                </select>
            </p>
        </form>
    );
}