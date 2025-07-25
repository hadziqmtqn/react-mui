import React, { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

export type OrganizationFormData = {
    name: string;
    organization_id: string;
};

type OrganizationFormProps = {
    onSubmit?: (data: OrganizationFormData) => void;
    loading?: boolean;
    initialData?: Partial<OrganizationFormData>;
};

export function OrganizationForm({ onSubmit, loading = false, initialData }: OrganizationFormProps) {
    const [formData, setFormData] = useState<OrganizationFormData>({
        name: initialData?.name || '',
        organization_id: initialData?.organization_id || '',
    });

    const [fieldError, setFieldError] = useState<{ name?: string; organization_id?: string }>({});

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        setFieldError({});

        // Basic validation
        const errors: { name?: string; organization_id?: string } = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.organization_id.trim()) {
            errors.organization_id = 'Organization ID is required';
        }

        if (Object.keys(errors).length > 0) {
            setFieldError(errors);
            return;
        }

        onSubmit?.(formData);
    }, [formData, onSubmit]);

    const handleInputChange = useCallback(
        (field: keyof OrganizationFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({
                ...prev,
                [field]: e.target.value,
            }));

            // Clear field error when user starts typing
            if (fieldError[field]) {
                setFieldError((prev) => ({ ...prev, [field]: undefined }));
            }
        }, [fieldError]
    );

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                    fullWidth
                    name="name"
                    label="Organization Name"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    slotProps={{
                        inputLabel: { shrink: true },
                    }}
                    error={!!fieldError.name}
                    helperText={fieldError.name}
                    disabled={loading}
                    placeholder="Enter organization name"
                />

                <TextField
                    fullWidth
                    name="organization_id"
                    label="Organization ID"
                    value={formData.organization_id}
                    onChange={handleInputChange('organization_id')}
                    slotProps={{
                        inputLabel: { shrink: true },
                    }}
                    error={!!fieldError.organization_id}
                    helperText={fieldError.organization_id || 'Unique identifier for the organization'}
                    disabled={loading}
                    placeholder="Enter organization ID"
                />

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={loading}
                        sx={{ flex: 1, mt: 2 }}
                    >
                        {loading ? 'Saving...' : 'Save Organization'}
                    </Button>
                    <Button
                        type="button"
                        variant="outlined"
                        size="large"
                        disabled={loading}
                        sx={{ flex: 1, mt: 2 }}
                        onClick={() => {
                            setFormData({
                                name: '',
                                organization_id: '',
                            });
                        }}
                    >
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
