'use client';

import { rubik } from '@@@/src/ui/fonts';
import Button from '@@@/src/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@@@/src/lib/actions';

export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (
        <form action={dispatch} className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h1 className={rubik.className}>
                    Please log in to continue.
                </h1>
                <div>
                    <div>
                        <label>
                            User ID
                        </label>
                        <div>
                            <input
                                placeholder="Enter your ID"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <div>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                            />
                        </div>
                    </div>
                </div>
                <LoginButton />
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {errorMessage && (
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    )}
                </div>
            </div>
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="mt-4 w-full" aria-disabled={pending}>
            Log In
        </Button>
    );
}
