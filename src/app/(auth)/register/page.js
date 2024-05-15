'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { Col, Row, DatePicker } from 'antd';
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'


const dateFormat = 'YYYY/MM/DD';

const Page = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [lastname, setLastname] = useState('')
    const [firstname, setFirstname] = useState('')
    const [middleInitial, setMiddleInitial] = useState('')
    const [birthdate, setBirthDate] = useState('')
    const [showBirthdate, setShowBirthdate] = useState(true)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const submitForm = event => {
        event.preventDefault()

        register({
            last_name: lastname,
            first_name: firstname,
            middle_initial: middleInitial,
            birthdate,
            show_birthdate: showBirthdate,
            username,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
            setIsLoading,
        })
    }

    return (
        <form onSubmit={submitForm}>
            {/* Name */}
            <Row gutter={14}>
                <Col span={10}>
                    <Label htmlFor="last_name">Last Name</Label>

                    <Input
                        id="last_name"
                        type="text"
                        value={lastname}
                        className="block mt-1 w-full"
                        onChange={event => setLastname(event.target.value)}
                        required
                        autoFocus
                        maxLength={50}
                    />

                    <InputError messages={errors.last_name} className="mt-2" />
                </Col>
                <Col span={11}>
                    <Label htmlFor="first_name">First Name</Label>

                    <Input
                        id="first_name"
                        type="text"
                        value={firstname}
                        className="block mt-1 w-full"
                        onChange={event => setFirstname(event.target.value)}
                        required
                        autoFocus
                        maxLength={50}
                    />

                    <InputError messages={errors.first_name} className="mt-2" />
                </Col>

                <Col span={3}>
                    <Label htmlFor="middle_initial">M.I</Label>

                    <Input
                        id="middle_initial"
                        type="text"
                        value={middleInitial}
                        className="block mt-1 w-full"
                        onChange={event => setMiddleInitial(event.target.value)}
                        autoFocus
                        maxLength={1}
                    />

                    <InputError messages={errors.middle_initial} className="mt-2" />
                </Col>
            </Row>

            {/* Birthdate */}
            <Row className="mt-4">
                <Label htmlFor="birthdate">Birthdate</Label>


                <DatePicker
                    format={dateFormat}
                    id="birthdate"
                    type="text"
                    value={birthdate}
                    className="block mt-1 w-full"
                    size='large'
                    onChange={date => setBirthDate(date)}
                    required
                />

                <InputError messages={errors.birthdate} className="mt-2" />
            </Row>

            {/* Public Age */}
            <Row className="block mt-4">
                <label
                    htmlFor="show_birthdate"
                    className="inline-flex items-center">
                    <input
                        id="show_birthdate"
                        type="checkbox"
                        name="show_birthdate"
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        onChange={event =>
                            setShowBirthdate(event.target.checked)
                        }
                        checked={showBirthdate}
                    />

                    <span className="ml-2 text-sm text-gray-600">
                        Public Age
                    </span>
                </label>
            </Row>

            {/* Username */}
            <Row className="mt-4">
                <Label htmlFor="username">Username</Label>

                <Input
                    id="username"
                    type="text"
                    value={username}
                    className="block mt-1 w-full"
                    onChange={event => setUsername(event.target.value)}
                    required
                />

                <InputError messages={errors.username} className="mt-2" />
            </Row>

            {/* Email Address */}
            <Row className="mt-4">
                <Label htmlFor="email">Email</Label>

                <Input
                    id="email"
                    type="email"
                    value={email}
                    className="block mt-1 w-full"
                    onChange={event => setEmail(event.target.value)}
                    required
                />

                <InputError messages={errors.email} className="mt-2" />
            </Row>

            {/* Password */}
            <Row className="mt-4">
                <Label htmlFor="password">Password</Label>

                <Input
                    id="password"
                    type="password"
                    value={password}
                    className="block mt-1 w-full"
                    onChange={event => setPassword(event.target.value)}
                    required
                    autoComplete="new-password"
                />

                <InputError messages={errors.password} className="mt-2" />
            </Row>

            {/* Confirm Password */}
            <Row className="mt-4">
                <Label htmlFor="passwordConfirmation">
                    Confirm Password
                </Label>

                <Input
                    id="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    className="block mt-1 w-full"
                    onChange={event =>
                        setPasswordConfirmation(event.target.value)
                    }
                    required
                />

                <InputError
                    messages={errors.password_confirmation}
                    className="mt-2"
                />
            </Row>

            <Row className="flex items-center justify-end mt-4">
                <Link
                    href="/login"
                    className="underline text-sm text-gray-600 hover:text-gray-900">
                    Already registered?
                </Link>

                <Button className="ml-4" loading={isLoading} onClick={submitForm}>Register</Button>
            </Row>
        </form>
    )
}

export default Page
