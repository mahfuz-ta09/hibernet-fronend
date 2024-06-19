

const convertFormData = (data:any) => {
    var form_data = new FormData()

    for(var key in data){
        form_data.append(key,data[key])
    }

    return form_data
}

export default convertFormData