// 3rd party imports
import * as React from 'react'
import { Formik, Form } from 'formik'
import {
  TextField,
  Button,
  makeStyles,
  InputAdornment,
  IconButton,
  FormControl,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const LoginForm = ({ submit }) => {
  

  // STYLING
  const useStyles = makeStyles({
    form: {
      margin: '10px auto',
      height: '250px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }
  })
  const classes = useStyles()

  // ~ Logic
  const [showPassword, handleShowPassword] = React.useState(false)

  return (
    <>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true)
          // make async call
          await submit(data)
          setSubmitting(false)
        }}
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
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </>
  )
}

export default LoginForm
