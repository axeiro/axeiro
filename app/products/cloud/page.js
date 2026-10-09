
"use client";

import { motion } from "framer-motion";
import Button from "../../components/Button";
import SectionLabel from "../../components/SectionLabel";

export default function CloudPage() {
  return (
    <main className="overflow-hidden bg-[#faf9f6] text-[#171717]">
      {/* Cloud hero */}
      <section className="relative px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12 lg:pt-36">
        <div className="mx-auto max-w-360">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <SectionLabel>Axeiro Cloud</SectionLabel>

            <h1 className="mt-7 text-5xl font-medium leading-[1.05] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
              Deploy faster.
              <br />
              <span className="text-[#6336f5]">
                Scale without friction.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#737373] sm:text-lg">
              A cloud orchestration platform designed to simplify application
              deployment, infrastructure management, and delivery workflows.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" showArrow>
                Get Early Access
              </Button>

              <Button href="/engineering" variant="outline">
                Explore Engineering
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud architecture */}
      <section className="border-y border-black/0.06 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-360">
          <SectionLabel>Architecture</SectionLabel>

          <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-tighter sm:text-5xl">
            From source code to production.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#737373] sm:text-base">
            A streamlined deployment workflow connecting source control,
            containerization, infrastructure, and application delivery.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Connect",
                description: "Connect your source repository and deployment workflow.",
              },
              {
                number: "02",
                title: "Build",
                description: "Package applications into deployable container images.",
              },
              {
                number: "03",
                title: "Deploy",
                description: "Orchestrate application delivery to cloud infrastructure.",
              },
              {
                number: "04",
                title: "Observe",
                description: "Monitor deployment progress and application activity.",
              },
            ].map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-black/[0.07] bg-[#faf9f6] p-6"
              >
                <span className="text-xs font-medium tracking-widest text-[#6336f5]">
                  {step.number}
                </span>

                <h3 className="mt-7 text-xl font-medium tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#737373]">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud features */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-360">
          <SectionLabel>Platform Capabilities</SectionLabel>

          <div className="mt-5 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 className="text-3xl font-medium leading-tight tracking-tighter sm:text-5xl">
              Infrastructure complexity,
              <span className="text-[#999]"> made manageable.</span>
            </h2>

            <p className="max-w-xl text-sm leading-8 text-[#737373] sm:text-base">
              Build toward a consistent deployment experience with repository
              integrations, container workflows, cloud infrastructure
              provisioning, and deployment visibility.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Repository integrations",
                description:
                  "Connect Git-based workflows to your application delivery pipeline.",
              },
              {
                title: "Container workflows",
                description:
                  "Build and manage container images as part of the deployment process.",
              },
              {
                title: "Cloud infrastructure",
                description:
                  "Design deployment workflows around cloud networking and compute.",
              },
              {
                title: "Deployment visibility",
                description:
                  "Track deployment progress and surface useful operational information.",
              },
              {
                title: "Service architecture",
                description:
                  "Organize platform capabilities into independently maintainable services.",
              },
              {
                title: "Developer experience",
                description:
                  "Reduce repetitive deployment tasks through a more consistent workflow.",
              },
            ].map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-black/[0.07] bg-white p-6 transition-colors duration-300 hover:border-[#6336f5]/40 sm:p-8"
              >
                <h3 className="text-lg font-medium tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#737373]">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud roadmap */}
      <section className="bg-[#171717] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-360">
          <SectionLabel dark>Roadmap</SectionLabel>

          <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-tighter sm:text-5xl">
            Building the next layer of cloud infrastructure.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Our roadmap focuses on making application deployment more
            accessible, observable, and repeatable.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                phase: "PHASE 01",
                title: "Deployment foundations",
                description:
                  "Repository connections, container workflows, and core deployment operations.",
              },
              {
                phase: "PHASE 02",
                title: "Operational intelligence",
                description:
                  "Improve deployment visibility, service logs, and operational feedback.",
              },
              {
                phase: "PHASE 03",
                title: "Platform expansion",
                description:
                  "Explore broader orchestration capabilities and additional infrastructure integrations.",
              },
            ].map((item) => (
              <article
                key={item.phase}
                className="rounded-2xl border border-white/10 bg-white/0.03 p-6 sm:p-8"
              >
                <span className="text-[10px] font-semibold tracking-[0.18em]">
                  {item.phase}
                </span>

                <h3 className="mt-6 text-xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-360 rounded-3xl bg-[#eee9ff] px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
          <SectionLabel>Build With Axeiro</SectionLabel>

          <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.055em] sm:text-6xl">
            Your next deployment starts here.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#686078] sm:text-base">
            Interested in the platform or want to collaborate on its
            development? Let’s talk about what you’re building.
          </p>

          <div className="mt-8">
            <Button href="/contact" showArrow>
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
