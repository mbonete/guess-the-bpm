interface YoutubeEmbedProps {
  embedId: string
}

export default function YoutubeEmbed({ embedId }: YoutubeEmbedProps) {
  return (
    <div className="w-full bg-bg-card rounded-2xl overflow-hidden ring-1 ring-border">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded youtube"
      />
    </div>
  )
}
