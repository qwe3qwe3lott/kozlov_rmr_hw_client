import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input } from '../../../../ui-library/components/Input';
import { SubmitButton } from '../../../../ui-library/components/SubmitButton';
import { SignInFormValues } from '../../types/SignInFormValues';
import { useSignInMutation } from '../../api';
import { checkAuthFetchError } from '../../api/validators/checkAuthFetchError';
import { parseAuthFetchError } from '../../api/parsers/parseAuthFetchError';
import {
	emailOptions,
	passwordOptions,
	phoneOptions
} from './inputValidationOptions';
import styles from './AuthForm.module.scss';

export const AuthForm: React.FC = () => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<SignInFormValues>({
		mode: 'onChange',
		shouldFocusError: true
	});

	const [errorMessages, setErrorMessages] = useState<string[]>([]);
	const [signIn, { isSuccess, error }] = useSignInMutation();
	const navigate = useNavigate();

	const submitHandler = (data: SignInFormValues) => {
		setErrorMessages([]);
		signIn(data);
	};

	useEffect(() => {
		if (isSuccess) {
			navigate('/', { replace: true });
		}
	}, [isSuccess]);

	useEffect(() => {
		if (!checkAuthFetchError(error)) {
			return;
		}
		setErrorMessages(parseAuthFetchError(error));
	}, [error]);

	return (
		<form className={styles.layout} onSubmit={handleSubmit(submitHandler)}>
			<Input
				label={'Email'}
				inputMode={'email'}
				errorMsg={errors.email?.message}
				{...register('email', emailOptions)}
			/>
			<Input
				label={'Phone'}
				inputMode={'tel'}
				errorMsg={errors.phone?.message}
				{...register('phone', phoneOptions)}
			/>
			<Input
				label={'Password'}
				inputMode={'text'}
				errorMsg={errors.password?.message}
				{...register('password', passwordOptions)}
			/>
			<SubmitButton text={'Submit'} />
			{errorMessages &&
				errorMessages.map((errorMessage, index) => (
					<p key={index} className={styles.error}>
						{errorMessage}
					</p>
				))}
		</form>
	);
};
