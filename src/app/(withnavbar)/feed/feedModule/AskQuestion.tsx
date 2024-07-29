import '../../../../css/feed/feed.css'


const AskQuestion = () => {
    return (
        <div className="ask-question">
            <h1>Share your thoughts or ask a question</h1>
            <form action="" className="question-form">
                <textarea placeholder="What's on your mind?" className='question' name="" id="" />
                <input className='question-file' type="file" />
                <input className='question-submit'  type="submit" />
            </form>
        </div>
    )
}

export default AskQuestion