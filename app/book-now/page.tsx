'use client';

import { FormEvent, useMemo, useState } from 'react';
import SiteShell from '../components/site-shell';

const styleOptions = ['Black & grey', 'Blackwork', 'Micro realism', 'Animal tattoo', 'Lettering', 'Not sure yet'];
const timingOptions = ['As soon as available', 'This month', 'Next 1-2 months', 'Flexible'];

const steps = [
  {
    eyebrow: 'Step 01',
    title: 'Your name',
    text: 'Start with the basics so Gia knows who the booking is for.',
  },
  {
    eyebrow: 'Step 02',
    title: 'Style',
    text: 'Choose the direction that best matches your tattoo idea.',
  },
  {
    eyebrow: 'Step 03',
    title: 'Placement',
    text: 'Add where it will go and roughly how large you want it.',
  },
  {
    eyebrow: 'Step 04',
    title: 'Tattoo idea',
    text: 'Describe the subject, mood, details, and anything important to avoid.',
  },
  {
    eyebrow: 'Step 05',
    title: 'Reference images',
    text: 'Upload the images you want Gia to review with the booking request.',
  },
  {
    eyebrow: 'Step 06',
    title: 'Timing',
    text: 'Choose when you would ideally like to book.',
  },
  {
    eyebrow: 'Final step',
    title: 'Your email',
    text: 'Finish with your email and send the booking request to Astoria Ink.',
  },
];

type BookingData = {
  name: string;
  style: string;
  placement: string;
  size: string;
  idea: string;
  references: string;
  imageNames: string[];
  imageFiles: File[];
  timing: string;
  email: string;
};

const initialData: BookingData = {
  name: '',
  style: '',
  placement: '',
  size: '',
  idea: '',
  references: '',
  imageNames: [],
  imageFiles: [],
  timing: '',
  email: '',
};

export default function BookNowPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState<BookingData>(initialData);
  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const step = steps[stepIndex];
  const progress = Math.round(((stepIndex + 1) / steps.length) * 100);

  const canContinue = useMemo(() => {
    switch (stepIndex) {
      case 0:
        return data.name.trim().length > 1;
      case 1:
        return Boolean(data.style);
      case 2:
        return Boolean(data.placement.trim() && data.size.trim());
      case 3:
        return data.idea.trim().length > 8;
      case 4:
        return data.imageNames.length > 0;
      case 5:
        return Boolean(data.timing);
      case 6:
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
      default:
        return false;
    }
  }, [data, stepIndex]);

  const updateField = (field: keyof BookingData, value: string) => {
    setData((current) => ({ ...current, [field]: value }));
  };

  const goNext = () => {
    if (!canContinue) return;
    setStepIndex((current) => Math.min(current + 1, steps.length - 1));
  };

  const goBack = () => {
    setStepIndex((current) => Math.max(current - 1, 0));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (stepIndex < steps.length - 1) {
      goNext();
      return;
    }

    if (!canContinue) return;
    setStatus('Sending your booking request...');

    await new Promise((resolve) => setTimeout(resolve, 700));

    setIsSubmitted(true);
    setStatus('Booking request sent. Gia or Astoria Ink will reply by email.');
  };

  return (
    <SiteShell>
      <section className="hero booking-hero">
        <div className="container booking-layout">
          <div className="hero-card booking-intro">
            <span className="eyebrow">Book tattoo</span>
            <h1>Book a tattoo with Gia.</h1>
            <p>
              A quick booking flow for your idea, placement, style, references, and contact details.
              Upload your reference images and send everything through in one request.
            </p>
            <a
              href="https://www.astoriaink.co.nz/"
              target="_blank"
              rel="noreferrer noopener"
              className="studio-backlink"
            >
              Astoria Ink Christchurch tattoo studio
            </a>
          </div>

          <form className="booking-form booking-funnel" onSubmit={handleSubmit}>
            <div className="funnel-head">
              <div>
                <span className="eyebrow">{step.eyebrow}</span>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </div>
              <span className="progress-count">{stepIndex + 1}/{steps.length}</span>
            </div>

            <div className="progress-track" aria-label={`Booking progress ${progress}%`}>
              <span style={{ width: `${progress}%` }} />
            </div>

            <div className="funnel-step">
              {stepIndex === 0 ? (
                <label className="field">
                  <span>Name</span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={data.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    placeholder="Your name"
                    required
                  />
                </label>
              ) : null}

              {stepIndex === 1 ? (
                <div className="choice-group" aria-label="Choose tattoo style">
                  {styleOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`choice-button ${data.style === option ? 'is-selected' : ''}`}
                      onClick={() => updateField('style', option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : null}

              {stepIndex === 2 ? (
                <div className="form-grid">
                  <label className="field">
                    <span>Placement</span>
                    <input
                      name="placement"
                      type="text"
                      value={data.placement}
                      onChange={(event) => updateField('placement', event.target.value)}
                      placeholder="Forearm, ribs, ankle..."
                      required
                    />
                  </label>
                  <label className="field">
                    <span>Approx size</span>
                    <input
                      name="size"
                      type="text"
                      value={data.size}
                      onChange={(event) => updateField('size', event.target.value)}
                      placeholder="5cm, palm size, half sleeve..."
                      required
                    />
                  </label>
                </div>
              ) : null}

              {stepIndex === 3 ? (
                <label className="field">
                  <span>Tattoo idea</span>
                  <textarea
                    name="idea"
                    value={data.idea}
                    onChange={(event) => updateField('idea', event.target.value)}
                    placeholder="Describe the subject, mood, details, meaning, and anything you want avoided."
                    required
                  />
                </label>
              ) : null}

              {stepIndex === 4 ? (
                <div className="reference-step">
                  <label className="upload-field">
                    <span>Choose reference images</span>
                    <input
                      name="images"
                      type="file"
                      accept="image/*"
                      multiple
                      required
                      onChange={(event) => {
                        const files = Array.from(event.target.files ?? []);
                        const names = files.map((file) => file.name);
                        setData((current) => ({ ...current, imageFiles: files, imageNames: names }));
                      }}
                    />
                    <strong>{data.imageNames.length ? `${data.imageNames.length} image selected` : 'Tap to select images'}</strong>
                  </label>

                  {data.imageNames.length ? (
                    <ul className="image-list" aria-label="Selected reference images">
                      {data.imageNames.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  ) : null}

                  <label className="field">
                    <span>Reference notes</span>
                    <textarea
                      name="references"
                      value={data.references}
                      onChange={(event) => updateField('references', event.target.value)}
                      placeholder="Mention what each image is for, existing tattoos nearby, or details Gia should notice."
                    />
                  </label>
                </div>
              ) : null}

              {stepIndex === 5 ? (
                <div className="choice-group" aria-label="Choose preferred timing">
                  {timingOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`choice-button ${data.timing === option ? 'is-selected' : ''}`}
                      onClick={() => updateField('timing', option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : null}

              {stepIndex === 6 ? (
                <label className="field">
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    placeholder="you@email.com"
                    required
                  />
                </label>
              ) : null}
            </div>

            {isSubmitted ? (
              <div className="success-panel" role="status">
                <span className="eyebrow">Request sent</span>
                <h3>Thanks, {data.name}.</h3>
                <p>
                  Your tattoo booking request has been received with {data.imageFiles.length}{' '}
                  reference image{data.imageFiles.length === 1 ? '' : 's'}.
                </p>
              </div>
            ) : (
              <div className="booking-actions funnel-actions">
                {stepIndex > 0 ? (
                  <button className="btn btn-secondary" type="button" onClick={goBack}>
                    Back
                  </button>
                ) : null}
                <button className="btn btn-primary" type="submit" disabled={!canContinue || status === 'Sending your booking request...'}>
                  {stepIndex === steps.length - 1 ? 'Send tattoo booking' : 'Continue'}
                </button>
              </div>
            )}

            {stepIndex === 4 ? (
              <p className="form-note">Reference images are included with the booking request.</p>
            ) : null}
            {status ? <p className="form-note booking-status">{status}</p> : null}
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
