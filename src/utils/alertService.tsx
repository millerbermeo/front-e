
// src/utils/alertService.ts
import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

interface AlertOptions {
    title?: string
    text?: string
    icon?: SweetAlertIcon
    confirmButtonText?: string
    cancelButtonText?: string
    showCancelButton?: boolean
    allowOutsideClick?: boolean
    onConfirm?: () => void
}

/**
 * Muestra una alerta SweetAlert2 reutilizable
 */
export const showAlert = async (options: AlertOptions): Promise<SweetAlertResult> => {
    const {
        title = '¡Alerta!',
        text = '',
        icon = 'info',
        confirmButtonText = 'Aceptar',
        cancelButtonText = 'Cancelar',
        showCancelButton = false,
        allowOutsideClick = true,
        onConfirm,
    } = options

    const result = await MySwal.fire({
        title,
        text,
        icon,
        showCancelButton,
        confirmButtonText,
        cancelButtonText,
        allowOutsideClick,
        customClass: {
            popup: 'rounded-lg p-6',
        },
    })

    if (result.isConfirmed && onConfirm) {
        onConfirm()
    }

    return result
}
