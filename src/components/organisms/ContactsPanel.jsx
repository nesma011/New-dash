import { useEffect, useState } from 'react'
import { getContacts } from '../../apis/contacts'
import SectionTitle from '../atoms/SectionTitle'
import TextLine from '../atoms/TextLine'
import ContactItem from '../molecules/ContactItem'

function ContactsPanel() {
  const [contacts, setContacts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadContacts() {
      try {
        setIsLoading(true)
        setError('')

        const data = await getContacts(controller.signal)
        setContacts(data?.contacts ?? [])
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError(loadError.message || 'Something went wrong while loading contacts.')
          setContacts([])
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadContacts()

    return () => controller.abort()
  }, [])

  return (
    <section>
      <SectionTitle className="text-sm">Contacts</SectionTitle>

      <div className="mt-3 space-y-3.5">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-100" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <TextLine width="w-32" />
                  <TextLine width="w-24" className="mt-2" />
                </div>
              </div>
            ))
          : contacts.map((item) => <ContactItem key={item.id} item={item} />)}

        {!isLoading && error ? <p className="text-sm text-rose-500">{error}</p> : null}
        {!isLoading && !error && contacts.length === 0 ? (
          <p className="text-sm text-slate-400">No contacts available.</p>
        ) : null}
      </div>
    </section>
  )
}

export default ContactsPanel
