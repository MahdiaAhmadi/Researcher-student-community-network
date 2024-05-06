'use client'

import * as React from 'react'

const Label = ({ label, ...props }) => (
    <label class="block text-gray-700 text-sm font-bold mb-2"
        {...props}>
        {label}
    </label>
)

export { Label }

