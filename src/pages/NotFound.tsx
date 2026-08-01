import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <MainLayout>
      <PageTransition>
        <section className="section-padding pt-40 pb-32 min-h-[70vh] flex items-center">
          <div className="container-width flex flex-col items-center text-center gap-8">
            <span className="font-display text-[clamp(6rem,16vw,12rem)] leading-none text-text-primary">
              404
            </span>
            <h1 className="section-title">This page hasn't been inked yet.</h1>
            <p className="subtitle mx-auto">
              Looks like this design doesn't exist or has been moved.
            </p>
            <Button to="/" variant="primary">Back to Home</Button>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
