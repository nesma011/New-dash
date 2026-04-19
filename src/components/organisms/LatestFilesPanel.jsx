import { useEffect, useRef, useState } from 'react'
import { getLatestFiles } from '../../apis/files'
import Button from '../atoms/Button'
import SectionTitle from '../atoms/SectionTitle'
import FileRow from '../molecules/FileRow'

function LatestFilesPanel() {
  const [latestFiles, setLatestFiles] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [uploadedFile, setUploadedFile] = useState(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadLatestFiles() {
      try {
        setIsLoading(true)
        setError('')

        const data = await getLatestFiles(controller.signal)
        setLatestFiles(data?.latestFiles ?? null)
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError(loadError.message || 'Something went wrong while loading latest files.')
          setLatestFiles(null)
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadLatestFiles()

    return () => controller.abort()
  }, [])

  function handleUploadClick() {
    inputRef.current?.click()
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0]

    if (!file) return

    const fileExtension = file.name.split('.').pop()?.toLowerCase() || 'file'

    setUploadedFile({
      id: `local-${file.name}-${file.lastModified}`,
      name: file.name,
      type: fileExtension,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      uploadedAt: 'Just now',
      author: 'You',
      downloadable: false,
    })

    event.target.value = ''
  }

  return (
    <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/70">
      <SectionTitle>{latestFiles?.title || 'Latest Files'}</SectionTitle>

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="mt-5 space-y-1">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => <FileRow key={index} isLoading />)
          : (
              <>
                {uploadedFile ? <FileRow file={uploadedFile} /> : null}
                {latestFiles?.items?.map((file) => <FileRow key={file.id} file={file} />)}
              </>
            )}

        {!isLoading && error ? <p className="text-sm text-rose-500">{error}</p> : null}
        {!isLoading && !error && !latestFiles ? (
          <p className="text-sm text-slate-400 dark:text-slate-500">No files data available.</p>
        ) : null}
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400 dark:text-slate-500">Drop files here or upload files</p>
            {uploadedFile ? (
              <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">{uploadedFile.name} selected</p>
            ) : null}
          </div>
          <Button variant="secondary" onClick={handleUploadClick}>
            Upload
          </Button>
        </div>
      </div>
    </section>
  )
}

export default LatestFilesPanel
