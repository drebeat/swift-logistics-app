const Loading = () => {
  return (
    <div className="h-screen bg-slate-50 flex items-center justify-center">
      <div className="animate-pulse w-40 h-40">
        <img src={require("../assets/logo.png")} alt="" />
      </div>
    </div>
  )
}

export default Loading
