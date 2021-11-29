// log the pageview with their URL
export const pageview = (url: any) => {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url
    })
}

// log specific events happening.
export const event = (props: Record<any, any>) => {
    (window as any).gtag('event', props.action, props.params)
}