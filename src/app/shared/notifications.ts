import swal from 'sweetalert2';

export class Notifications {


    static ConfirmAcion(displayedMsg: any, confirmText: string): Promise<any> {
      return  swal({
            title: 'Are you sure?',
            html: displayedMsg ,
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmText,
            cancelButtonText: 'No',
            confirmButtonClass: 'btn btn-danger',
            cancelButtonClass: 'btn btn-primary',
            buttonsStyling: false,
            allowOutsideClick: true,
            allowEscapeKey: true
        })
    }

    static ConfirmSuspendAcion(title: any, text: any): any {
        return  swal({
            title: title,
            html: text,
            //input: 'text',
            //inputPlaceholder: input,
            showCancelButton: true,
            allowOutsideClick: true,
            allowEscapeKey: false,
            inputValidator: (value) => {
                console.log(value)
                return !value && 'Please write a reson!'
            }
        })
    }

    static DisplaySuccessToastMessage( title: string, successMessage: string): void {
        swal({
          title: title,
          html: successMessage,
          type: 'success',
          timer: 5000,
          showConfirmButton: false,
          toast : true,
          position : 'center',
        });
    }

    static DisplayCancelToastMessage(title: string, text: any): void {
        swal({
            title: title,
            html: text,
            type: 'info',
            toast: true,
            timer: 4000,
            position: 'top-right',
            showConfirmButton: false
        })
    }

    static DisplayWarningToastMessage(title: any, text: any): void {
        swal({
            title: title,
            html: text,
            type: 'warning',
            toast: true,
            showConfirmButton: false,
            position: 'top-right',
            timer: 4000
             })
    }

    static DisplayErrorToastMessage(title: any, text: any): void {

        swal({
        title: title,
        text: text,
        type: 'error',
        toast: true,
        showConfirmButton: false,
        position: 'center',
        timer: 2000
         })
    }
}
