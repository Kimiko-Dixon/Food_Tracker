document.addEventListener('DOMContentLoaded', () => {
    const accountSettingsBtn = document.getElementById('account-settings')
    const accountSettingsModal = document.getElementById(
        'account-settings-modal'
    )
    const goalSettingsBtn = document.getElementById('goal-settings')
    const goalSettingsModal = document.getElementById('goal-settings-modal')
    const changePasswordBtn = document.getElementById('change-password-btn')
    const deleteButtons = document.querySelectorAll('.delete')

    // Open Account Settings Modal
    accountSettingsBtn.addEventListener('click', () => {
        accountSettingsModal.classList.add('is-active')
    })

    // Open Goal Settings Modal
    goalSettingsBtn.addEventListener('click', () => {
        goalSettingsModal.classList.add('is-active')
    })

    // Close Modals
    deleteButtons.forEach((button) => {
        button.addEventListener('click', () => {
            accountSettingsModal.classList.remove('is-active')
            goalSettingsModal.classList.remove('is-active')
        })
    })

    // Change Password Button
    changePasswordBtn.addEventListener('click', () => {
        const newPassword = document.getElementById('new-password').value
        const verifyPassword = document.getElementById('verify-password').value

        if (newPassword === verifyPassword) {
            alert('Your password has been changed successfully!')
            accountSettingsModal.classList.remove('is-active')
        } else {
            alert('Passwords do not match. Please try again.')
        }
    })
})
