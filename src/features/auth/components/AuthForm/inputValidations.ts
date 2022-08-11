export const emailOptions = {
	required: 'Enter your email',
	pattern: {
		value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
		message: 'Enter valid email'
	},
	value: 'igor@ya.ru'
};

export const phoneOptions = {
	required: 'Enter your phone',
	pattern: {
		value: /^\+(7|976)[0-9]{10}$/,
		message: 'Enter valid phone' //TODO check ALL codes like 985
	},
	value: '+79853421167'
};

export const passwordOptions = {
	required: 'Enter your password!',
	minLength: { value: 4, message: 'password contains at less 4 symbols' },
	maxLength: { value: 100, message: 'password can`t contain more than 100 symbols' },
	pattern: {
		value: /^[a-z0-9]+$/i,
		message: 'it should contains only letters and digits'
	},
	value: 'mypassword1234'
};