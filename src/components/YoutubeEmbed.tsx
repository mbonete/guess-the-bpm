interface YoutubeEmbedProps {
  embedId: string
}

export default function YoutubeEmbed({ embedId }: YoutubeEmbedProps) {
  return (
    <div className="my-2 w-full h-full">
      <iframe
        className="w-full h-full rounded"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded youtube"
      />
    </div>
  )
}
