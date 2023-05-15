import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "y35qa0tf",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: false,
  token:
    "sk7jDQUoCfTD0OFsqwUSe7i5jHPPQLybvFlQQUqCwk559fSzC37YHoaZS83HyafyUhDrOIKYmnyMYfirMX5MO7A10TOWjf2vRK3GtrWhmerrVqDKlORWsHLuT4QoxLJ6lZBB5EzWmVQTQ61t1bqHYrPH7QPDJ0odVGV0ydf4Qn1ecZg6STYX",
});
