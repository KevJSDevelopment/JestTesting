import React from 'react'
import ReactDOM from 'react-dom'
import SecondTest from '../SecondTest'
import {render} from '@testing-library/react'

test('take a screenshot of the second test component', () => {
    const component = render(
        <SecondTest />
    )
    expect(component.container).toMatchSnapshot();
})

test('Check if component renders correctly', () => {
    const div = document.createElement('div')
    const component = render(
        <SecondTest />
    )
    expect(component.container).toMatchSnapshot();
})