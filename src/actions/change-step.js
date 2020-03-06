const changeStep = (e) => {
    return {
        type: 'CHANGE_STEP',
        payload: { step: (Number(e.target.value)||1) }
    }
}

export default changeStep;