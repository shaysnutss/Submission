package com.service.accountservice.Controller;

import com.service.accountservice.exception.AccountNotFoundException;
import com.service.accountservice.model.Account;
import com.service.accountservice.repository.AccountServiceRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/account")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AccountController {

    private final AccountServiceRepository accountServiceRepository;

    /**
     * Find all accounts
     *
     * @return list of all accounts registered in the database
     */
    @GetMapping("/getAllAccounts")
    public List<Account> getAllAccounts() {
        List<Account> allAccounts = accountServiceRepository.findAll();
        if (allAccounts == null){
            throw new AccountNotFoundException();
        }
        //remove password from all accounts before sending
        List<Account> allAccountsNoPassword = new ArrayList<>();
        for (Account account : allAccounts) {
            allAccountsNoPassword.add(Account.accountNoPassword(account));
        }
        return allAccountsNoPassword;
    }
}