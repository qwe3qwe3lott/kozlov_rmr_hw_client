import React, { useState } from 'react';
import Input from '../../../../ui-library/components/Input';
import styles from './AuthForm.module.css';
import { useForm } from 'react-hook-form';
import SubmitButton from '../../../../ui-library/components/SubmitButton';
import { SignInFormValues } from '../../types/SignInFormValues';
import { useGetProfileQuery, useSignInMutation } from '../../api';
import { Navigate, useNavigate } from 'react-router-dom';
import { emailOptions, passwordOptions, phoneOptions } from './inputValidations';


const AuthForm: React.FC = () => {
	const { register, formState: { errors }, handleSubmit } = useForm<SignInFormValues>({
		mode: 'onChange'
	});
	const [errorMessage, setErrorMessage] = useState('');
	const [signIn] = useSignInMutation();
	const navigate = useNavigate();
	const { error } = useGetProfileQuery();
	if (!error) return <Navigate to={'/'} replace/>;
	const submitHandler = async (data: SignInFormValues) => {
		setErrorMessage('');
		try {
			await signIn(data).unwrap();
			navigate('/');
		} catch (e) {
			// @ts-ignore
			setErrorMessage(e.data.message);
		}
	};
	return <form className={styles.layout} onSubmit={handleSubmit(submitHandler)}>
		<Input label={'Email'} inputMode={'email'}
			   errorMsg={errors.email?.message} {...register('email', emailOptions)}/>
		<Input label={'Phone'} inputMode={'tel'}
			   errorMsg={errors.phone?.message} {...register('phone', phoneOptions)}/>
		<Input label={'Password'} inputMode={'text'}
			   errorMsg={errors.password?.message} {...register('password', passwordOptions)}/>
		<SubmitButton text={'Submit'}/>
		{errorMessage && <p>{errorMessage}</p>}
	</form>;
};

export default AuthForm;