Act as a senior software engineer with 10+ years of experience and perform a comprehensive code review of my TROID application. 

Please analyze:

1. **Architecture & Design Patterns**
   - Is the overall architecture scalable and maintainable?
   - Are design patterns used appropriately?
   - Any anti-patterns or code smells?
   - Is there proper separation of concerns?

2. **Code Quality**
   - Naming conventions consistency
   - Code duplication (DRY violations)
   - Function/component complexity (cyclomatic complexity)
   - Dead code or unused imports
   - Proper abstraction levels

3. **Performance Issues**
   - Unnecessary re-renders in React components
   - Missing memoization opportunities
   - N+1 query problems
   - Bundle size optimizations
   - Memory leaks potential

4. **Security Vulnerabilities**
   - Authentication/authorization flaws
   - Input validation issues
   - XSS or injection vulnerabilities
   - Exposed sensitive data
   - Insecure dependencies

5. **Best Practices**
   - Error handling and logging
   - TypeScript type safety (any types, missing types)
   - Testing coverage gaps
   - Accessibility issues
   - SEO problems

6. **Maintainability**
   - Code comments and documentation
   - Complex logic that needs refactoring
   - Technical debt areas
   - Missing abstractions or over-engineering

Provide specific examples from my code with line numbers and suggest concrete improvements. Prioritize issues by severity: Critical, High, Medium, Low.
```

### Specific Component/Feature Review:
```
Review my trading battle system implementation like a senior engineer would during a PR review:

1. Check the battles/[id]/page.tsx file for:
   - React best practices and hooks usage
   - Performance optimizations needed
   - Proper error boundaries
   - State management efficiency

2. Review the API routes for:
   - Proper error handling
   - Rate limiting needs
   - Data validation
   - SQL injection prevention

3. Analyze the real-time trading logic for:
   - Race conditions
   - Data consistency issues
   - WebSocket connection handling
   - Memory management

Be harsh but constructive - point out what junior developers commonly miss.
```

### Code Quality Audit:
```
Perform a code quality audit on my TROID project as if you're preparing for a technical due diligence:

Focus on:
- Technical debt assessment
- Refactoring priorities
- Testing strategy gaps
- Dependency audit (outdated, vulnerable, unnecessary)
- Database query optimization needs
- Caching opportunities
- Code that would be hard for new developers to understand

Rate each area from 1-10 and provide an action plan for improvement.
```

### Production Readiness Review:
```
Review my codebase for production readiness like a senior SRE/DevOps engineer:

Check for:
1. Error handling and recovery
2. Logging and monitoring setup
3. Performance bottlenecks
4. Scalability concerns
5. Database connection pooling
6. Memory leaks
7. Security headers
8. Environment variable management
9. CI/CD pipeline gaps
10. Backup and disaster recovery

Flag anything that could cause issues at scale or in production.
```

## With GitHub MCP Server Enabled:
```
Access my TROID repository on GitHub and conduct a senior-level code review:

1. Start with the overall project structure - is it intuitive and scalable?
2. Review critical paths: authentication, payment processing, trading logic
3. Check for consistency across the codebase
4. Identify the top 10 code smells that need immediate attention
5. Review recent commits for quality issues
6. Check if the code follows Next.js best practices and conventions

Create GitHub issues for each problem found, labeled by priority.
```

## Focused Reviews:

### Performance Review:
```
Analyze my application for performance issues like a senior performance engineer:
- Find all unnecessary re-renders
- Identify missing React.memo, useMemo, useCallback
- Check for large bundle imports
- Find blocking operations
- Suggest lazy loading opportunities
```

### Security Review:
```
Do a security audit of my code from a senior security engineer perspective:
- Check all user inputs for validation
- Review authentication implementation
- Find potential XSS vulnerabilities  
- Check for exposed API keys or secrets
- Review CORS and CSP settings
```

### TypeScript Review:
```
Review my TypeScript usage like a senior engineer who's strict about type safety:
- Find all 'any' types that should be properly typed
- Identify missing type definitions
- Check for type assertion abuse
- Suggest better generic implementations
- Find places where discriminated unions would be better
```

## Tips for Better Reviews:

1. **Be specific about your concern areas:**
```
   "I'm worried about the performance of my trading chart component - review it like a senior engineer who specializes in React performance"
```

2. **Ask for comparison to industry standards:**
```
   "Compare my code structure to how senior engineers at FAANG companies would structure a similar trading application"
```

3. **Request actionable feedback:**
```
   "Don't just identify problems - provide the exact code changes a senior engineer would make"
```

4. **Ask for teaching moments:**
```
   "Explain why each issue matters like you're mentoring a junior developer"
