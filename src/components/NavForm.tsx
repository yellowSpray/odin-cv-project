import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink
} from "./ui/pagination";

export default function NavForm({ numPage, setPage }: { numPage: number, setPage: React.Dispatch<React.SetStateAction<number>>}) {
    return (
        <Pagination className={"py-5 border-t-1 b-gray-200"}>
            <PaginationContent>

                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                setPage((prev: number) => Math.max(prev - 1, 1))
                            }}
                            aria-disabled={numPage === 1}
                            className={
                                numPage === 1 ? "pointer-events-none opacity-50" : undefined
                            }
                        />
                    </PaginationItem>

                {[1, 2, 3].map((page) => {
                    return (
                        <PaginationItem key={page}>
                            <PaginationLink
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    setPage(page)
                                }}
                                isActive={page === numPage}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}

                  <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            setPage((prev: number) => Math.min(prev + 1, 3))
                        }}
                        aria-disabled={numPage === 3}
                        className={
                            numPage === 3 ? "pointer-events-none opacity-50" : undefined
                        }
                    />
                  </PaginationItem>

            </PaginationContent>
        </Pagination>
    )
}