// 3rd party imports
import * as React from 'react'
import { Formik, Form } from 'formik'
import {
  TextField,
  Button,
  makeStyles,
  InputAdornment,
  IconButton,
  Typography,
  Link,
  FormControl,
  Card,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import * as yup from 'yup'

const LoginForm = ({ submit }) => {
  const loginValidationScheme = yup.object().shape({
    username: yup.string().max(255).required('Required'),
    password: yup
      .string()
      .min(6, 'Password is must be 6 characters')
      .max(255)
      .required('Required'),
  })

  // STYLING
  const useStyles = makeStyles({
    form: {
      width: '300px',
      margin: '0 auto',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    card: {
      width: '330px',
      margin: '100px auto',
      padding: '20px'
    }
  })
  const classes = useStyles()

  // ~ Logic
  const [showPassword, handleShowPassword] = React.useState(false)

  return (
    <Card className={classes.card}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true)
          // make async call
          await submit(data)
          setSubmitting(false)
        }}
        validationSchema={loginValidationScheme}
      >
        {({
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          touched,
          errors,
        }) => (
          <Form className={classes.form}>
            <TextField
              placeholder='username'
              name='username'
              label='username'
              error={errors.username ? true : false}
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.username && touched.username && errors.username}
            />
            <TextField
              placeholder='password'
              label='password'
              name='password'
              error={errors.password ? true : false}
              helperText={
                errors.password && touched.password && errors.password
              }
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => {
                        handleShowPassword(!showPassword)
                      }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControl>
              <Button
                disabled={isSubmitting}
                variant='contained'
                color='primary'
                type='submit'
              >
                Login
              </Button>
            </FormControl>
            <Typography>
              or <Link href='#'>Register</Link>
            </Typography>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default LoginForm
