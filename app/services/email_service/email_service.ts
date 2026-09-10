export const sendEmail = async (values: any) => {
    const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
    }

    return data.success;
};